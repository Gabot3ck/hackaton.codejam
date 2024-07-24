package com.example.reservationpec.api

import com.example.reservationpec.model.LoginRequest
import com.example.reservationpec.model.LoginResponse
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.POST


interface ApiService {
    @POST("login")
    fun login(@Body request: LoginRequest): Call<LoginResponse>
}