import { Injectable } from '@nestjs/common';
import { CreateChannelDto } from './dto/create-channel.dto.js';
import { UpdateChannelDto } from './dto/update-channel.dto.js';

@Injectable()
export class ChannelService {
  create(createChannelDto: CreateChannelDto) {
    return 'This action adds a new channel';
  }

  findAll() {
    return `This action returns all channel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} channel`;
  }

  update(id: number, updateChannelDto: UpdateChannelDto) {
    return `This action updates a #${id} channel`;
  }

  remove(id: number) {
    return `This action removes a #${id} channel`;
  }
}
