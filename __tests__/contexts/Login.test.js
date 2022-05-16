import api from '../../src/api/api'
import { login } from '../../src/context/AuthContext'
import { cleanup } from 'react-native-testing-library'

describe('Login tests', () => {
    describe('login function', () => {
        const email = 'test@test.com'
        const password = 'password'

        // beforeEach(() => {
        //     api.post.mockResolvedValue({})
        // })

        it('should call endpoint with given email & password', async () => {
            await expect(login(email, password)).rejects.toThrow()
        })

        it('should call endpoint with given email & password', async () => {
            await expect(
                login('Takahiro_Mitsui', 'TakahiroMitsui')
            ).resolves.toThrow()
        })
    })
})
