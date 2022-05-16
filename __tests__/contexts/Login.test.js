import api from '../../src/api/api'
import { loginFunction } from '../../src/context/AuthContext'
import { cleanup } from 'react-native-testing-library'

describe('Login tests', () => {
    describe('login function', () => {
        const email = 'test@test.com'
        const password = 'password'

        // beforeEach(() => {
        //     api.post.mockResolvedValue({})
        // })

        it('should call endpoint with wrong email & password', () => {
            expect(loginFunction(email, password)).rejects.toEqual({
                error: 500,
            })
        })

        it('should call endpoint with correct email & password', () => {
            expect(
                loginFunction('Takahiro_Mitsui', 'TakahiroMitsui')
            ).resolves.toReturn({
                userName: 'Takahiro_Mitsui',
                publicAddress: undefined,
            })
        })
    })
})
