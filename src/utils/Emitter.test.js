import { describe, it, expect, vi } from 'vitest'
import Emitter from './Emitter'

describe('Emitter', () => {
  it('emits and listens to events', () => {
    const spy = vi.fn()
    Emitter.on('test', spy)
    Emitter.emit('test', 'hello')
    expect(spy).toHaveBeenCalledWith('hello')
    Emitter.off('test', spy)
  })
})
