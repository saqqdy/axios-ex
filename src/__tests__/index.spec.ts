import AxiosExtend, { exponentialDelay } from '../index'

const axiosEx = new AxiosExtend({
    retryDelay: exponentialDelay
})

test('defines init() & create()', () => {
    expect(typeof axiosEx.init).toBe('function')
    expect(typeof axiosEx.create).toBe('function')
})
