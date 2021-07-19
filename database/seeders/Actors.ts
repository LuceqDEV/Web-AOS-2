import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Actors from 'App/Models/Actors'

export default class ActorsSeeder extends BaseSeeder {
  public async run () {
    await Actors.createMany([
      {
        account_id: 1,
        slot_id: 0,
        name: 'Admin',
        character_name: 'Charset01',
        character_index: 0,
        face_name: 'Charset01',
        face_index: 0,
        class_id: 1,
        sex: 0,
        level: 100,
        exp: 10000,
        hp: 500000,
        mp: 500000,
        mhp: 500000,
        mmp: 500000,
        atk: 1000,
        def: 1000,
        int: 1000,
        res: 1000,
        agi: 1000,
        luk: 1000,
        points: 1000,
        guild_id: 0,
        revive_map_id: 1,
        revive_x: 14,
        revive_y: 3,
        map_id: 1,
        x: 21,
        y: 12,
        direction: 2,
        gold: 999999,
        online: 0,
        comment: "Admin Team",
        last_login: 1610553586
      },
      {
        account_id: 2,
        slot_id: 0,
        name: 'Lola',
        character_name: 'Charset04',
        character_index: 4,
        face_name: 'Charset04',
        face_index: 4,
        class_id: 2,
        sex: 1,
        level: 1,
        exp: 0,
        hp: 500,
        mp: 500,
        mhp: 500,
        mmp: 500,
        atk: 10,
        def: 10,
        int: 10,
        res: 10,
        agi: 10,
        luk: 10,
        points: 10,
        guild_id: 0,
        revive_map_id: 1,
        revive_x: 14,
        revive_y: 3,
        map_id: 1,
        x: 21,
        y: 12,
        direction: 2,
        gold: 0,
        online: 0,
        comment: "Lola",
        last_login: 1610553586
      },
      {
        account_id: 3,
        slot_id: 0,
        name: 'Nietore',
        character_name: 'Charset01',
        character_index: 0,
        face_name: 'Charset01',
        face_index: 0,
        class_id: 1,
        sex: 0,
        level: 100,
        exp: 10000,
        hp: 500000,
        mp: 500000,
        mhp: 500000,
        mmp: 500000,
        atk: 1000,
        def: 1000,
        int: 1000,
        res: 1000,
        agi: 1000,
        luk: 1000,
        points: 1000,
        guild_id: 0,
        revive_map_id: 1,
        revive_x: 14,
        revive_y: 3,
        map_id: 1,
        x: 21,
        y: 12,
        direction: 2,
        gold: 999999,
        online: 0,
        comment: "Admin Team",
        last_login: 1610553586
      },
    ])
  }
}
