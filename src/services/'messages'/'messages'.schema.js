// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'
messages
;('.class')

// Main data model schema
export const messagesSchema = {
  $id: 'Messages',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'text'],
  properties: {
    _id: ObjectIdSchema(),
    text: { type: 'string' }
  }
}
export const messagesValidator = getValidator(messagesSchema, dataValidator)
export const messagesResolver = resolve({})

export const messagesExternalResolver = resolve({})

// Schema for creating new data
export const messagesDataSchema = {
  $id: 'MessagesData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    ...messagesSchema.properties
  }
}
export const messagesDataValidator = getValidator(messagesDataSchema, dataValidator)
export const messagesDataResolver = resolve({})

// Schema for updating existing data
export const messagesPatchSchema = {
  $id: 'MessagesPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...messagesSchema.properties
  }
}
export const messagesPatchValidator = getValidator(messagesPatchSchema, dataValidator)
export const messagesPatchResolver = resolve({})

// Schema for allowed query properties
export const messagesQuerySchema = {
  $id: 'MessagesQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(messagesSchema.properties)
  }
}
export const messagesQueryValidator = getValidator(messagesQuerySchema, queryValidator)
export const messagesQueryResolver = resolve({})
