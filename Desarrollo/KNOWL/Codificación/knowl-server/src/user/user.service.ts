import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import * as fs from 'fs';
import { join } from 'path';
//interfaces

//DTOs

import { Collection, Field, passwordSalts } from 'src/enums';
import { Experience, Formation, User } from './models';
import {
  ChangePasswordDto,
  EditUserDto,
  LoginUserDto,
  RegisterUserDto,
} from './dto';
import { ChangeRecoverPasswordDto } from './dto/change-recover-password.dto';
import { UserVerifyDto } from './dto/user-verify.dto';
import { NewFormationDto } from './dto/new-formation.dto';
import { NewExperienceDto } from './dto/new-experience.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Collection.USER)
    private readonly userModel: Model<User>,
    @InjectModel(Collection.FORMATION)
    private readonly formationModel: Model<Formation>,
    @InjectModel(Collection.EXPERIENCE)
    private readonly experienceModel: Model<Experience>,
  ) {}

  async loginUser(loginUserDto: LoginUserDto) {
    try {
      const user = await this.userModel.findOne({
        email: loginUserDto.email,
      });
      const isMatch = await bcrypt.compare(
        loginUserDto.password,
        user.password,
      );
      if (!user || !isMatch) return null;
      return user;
    } catch (error) {
      return null;
    }
  }

  async registerUser(registerUserDto: RegisterUserDto) {
    try {
      const hashedPassword = await bcrypt.hash(
        registerUserDto.password,
        passwordSalts,
      );
      const newUser = await new this.userModel({
        ...registerUserDto,
        password: hashedPassword,
      }).save();

      return newUser;
    } catch (error) {
      return null;
    }
  }

  async updateUserProfileImg(userId: string) {
    try {
      const newUser = await this.userModel.findByIdAndUpdate(
        userId,
        {
          profileImage: `http://localhost:4000/user/profile/${userId}`,
        },
        { new: true },
      );

      return newUser;
    } catch (error) {
      return null;
    }
  }

  async updateUserPassword(changePasswordDto: ChangePasswordDto) {
    try {
      const user = await this.userModel.findById(changePasswordDto.userId);
      const isMatch = await bcrypt.compare(
        changePasswordDto.oldPassword,
        user.password,
      );
      if (!isMatch) return null;
      const hashedNewPassword = await bcrypt.hash(
        changePasswordDto.newPassword,
        passwordSalts,
      );
      const newUser = await this.userModel.findByIdAndUpdate(
        user._id,
        { password: hashedNewPassword },
        { new: true },
      );

      return newUser;
    } catch (error) {
      return null;
    }
  }

  async getPassword(email: string) {
    try {
      const userExists = await this.userModel.findOne({ email });

      if (!userExists) return null;

      return userExists;
    } catch (error) {
      return null;
    }
  }

  async getAllUsers() {
    try {
      const users = await this.userModel.find();
      return users;
    } catch (error) {
      return null;
    }
  }
  async getUser(id: string) {
    try {
      const user = await this.userModel.findById(id);
      return user;
    } catch (error) {
      return null;
    }
  }

  async getFormation(id: string) {
    try {
      const formation = await this.formationModel.find({ user: id });
      return formation;
    } catch (error) {
      return null;
    }
  }
  async getExperience(id: string) {
    try {
      const experience = await this.experienceModel.find({ user: id });
      return experience;
    } catch (error) {
      return null;
    }
  }

  async editUser(userId: string, editUserDto: EditUserDto) {
    try {
      const newUser = await this.userModel.findByIdAndUpdate(
        userId,
        editUserDto,
        { new: true },
      );

      return newUser;
    } catch (error) {
      return null;
    }
  }
  async editStatus(userId: string, status: { status: string }) {
    try {
      const newUser = await this.userModel.findByIdAndUpdate(userId, status, {
        new: true,
      });

      return newUser;
    } catch (error) {
      return null;
    }
  }

  async userVerify(userId: string, userVerifyDto: UserVerifyDto) {
    try {
      const newUser = await this.userModel.findByIdAndUpdate(
        userId,
        { ...userVerifyDto, verified: true },
        { new: true },
      );

      return newUser;
    } catch (error) {
      return null;
    }
  }

  async deleteUser(userId: string) {
    try {
      const deletedUser = await this.userModel.findByIdAndDelete(userId);
      return deletedUser;
    } catch (error) {
      return null;
    }
  }

  async getUserByEmail(loginUserDto: LoginUserDto) {
    const user = await this.userModel.findOne({
      email: loginUserDto.email,
    });
    const isMatch = await bcrypt.compare(loginUserDto.password, user.password);
    if (!user || !isMatch) {
      throw new UnauthorizedException('Email y/o contraseña incorrectos');
    }

    return user;
  }

  async getUserCurrentDetail(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new UnauthorizedException('Usuario no registrado');
    }

    return user;
  }

  async getUserForMail(email: string) {
    try {
      const user = this.userModel.findOne({ email });
      return user;
    } catch (error) {
      return null;
    }
  }

  async confirmUser(userId: string) {
    try {
      const confirmed = await this.userModel.findByIdAndUpdate(
        userId,
        { verified: true },
        { new: true },
      );
      if (!confirmed) return false;
      return true;
    } catch (error) {
      return false;
    }
  }

  async changeRecoverPassword(
    changeRecoverPasswordDto: ChangeRecoverPasswordDto,
  ) {
    try {
      const hashedNewPassword = await bcrypt.hash(
        changeRecoverPasswordDto.newPassword,
        passwordSalts,
      );
      const confirmed = await this.userModel.findOneAndUpdate(
        { password: changeRecoverPasswordDto.password },
        { password: hashedNewPassword },
        { new: true },
      );
      if (!confirmed) return false;
      return true;
    } catch (error) {
      return false;
    }
  }

  async newFormation(newFormationDto: NewFormationDto) {
    try {
      const newFormation = await new this.formationModel(
        newFormationDto,
      ).save();
      return newFormation;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async newExperience(newExperienceDto: NewExperienceDto) {
    try {
      const newExperience = await new this.experienceModel(
        newExperienceDto,
      ).save();
      return newExperience;
    } catch (error) {
      return null;
    }
  }
}
