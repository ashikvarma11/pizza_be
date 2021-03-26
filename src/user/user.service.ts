import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  private userList: User[] = [];
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getAllUsers() {
    const alluserList = await this.userModel.find().exec();
    return alluserList;
  }

  async getSingleUser(id: string) {
    const singleuser = await this.userModel.findById(id);
    if (!singleuser) throw new NotFoundException('user not found');
    return singleuser;
  }

  async deleteUser(id: string) {
    const toBeDeleteduser = await this.userModel.findById(id);
    if (!toBeDeleteduser) throw new NotFoundException('user not found');
    toBeDeleteduser.remove();
    return toBeDeleteduser;
  }

  async updateUser(
    id: string,
    username: string,
    name: string,
    password: string,
    orders: Array<any>,
  ) {
    const toBeUpdateduser = await this.getSingleUser(id);
    if (!toBeUpdateduser) throw new NotFoundException('user not found');

    if (name) toBeUpdateduser.name = name;
    if (username) toBeUpdateduser.username = username;
    if (password) toBeUpdateduser.password = password;
    if (orders) toBeUpdateduser.orders = orders;

    toBeUpdateduser.save();

    return toBeUpdateduser;
  }

  async checkUserExists(username) {
    const userExists = await this.userModel.findOne({ username });
    if (userExists) return true;
    return false;
  }

  async getUserByUserName(username) {
    const userExists = await this.userModel.findOne({ username });
    if (userExists) return userExists;
    return null;
  }

  async createNewUser(payLoadUser) {
    const newUser = new this.userModel(payLoadUser);
    return newUser;
  }

  async addOrder(userId, orderId) {
    let savedToUser = await this.userModel.update(
      {
        _id: userId,
      },
      {
        $push: {
          orders: orderId,
        },
      },
    );
    return savedToUser? { status:200, message: "OK"}: false
  }

  // Registration
}
