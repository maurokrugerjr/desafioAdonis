import { DateTime } from 'luxon'
import {BaseModel, belongsTo, column, hasMany} from '@adonisjs/lucid/orm'
import {BelongsTo, HasMany} from "@adonisjs/lucid/types/relations";
import Cliente from "#models/cliente";
import Atividade from "#models/atividade";

export default class Projeto extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  public nome: string

  @column()
  public descricao: string

  @column()
  public clienteId: number

  @column()
  public status: string

  @belongsTo(() => Cliente)
  public cliente: BelongsTo<typeof Cliente>

  @hasMany(() => Atividade)
  public atividades: HasMany<typeof Atividade>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
