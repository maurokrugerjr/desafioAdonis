import { DateTime } from 'luxon'
import {BaseModel, belongsTo, column} from '@adonisjs/lucid/orm'
import Projeto from "#models/projeto";
import {BelongsTo} from "@adonisjs/lucid/types/relations";

export default class Atividade extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  public nome: string

  @column()
  descricao: string

  @column()
  projetoId: number

  @column()
  status: string

  @belongsTo(() => Projeto)
  public projeto: BelongsTo<typeof Projeto>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
