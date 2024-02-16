import request from 'supertest'
import app from '../app.js'
import mongoose from 'mongoose'


afterAll(async ()=>{
    await mongoose.disconnect()
})

describe("GET /applicantprofile/retrieve", ()=>{
    test("should return applicant profiles", async ()=>{
        return request(app)
            .get("/applicantprofile/retrieve")
            .expect('Content-type', /json/)
            .expect(200)
    })
})
