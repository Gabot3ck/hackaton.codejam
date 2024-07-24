package com.example.reservationpec.viewmodel

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.example.reservationpec.api.ApiClient
import com.example.reservationpec.model.LoginRequest
import com.example.reservationpec.model.LoginResponse
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class LoginViewModel : ViewModel() {

    private val _loginResponse = MutableLiveData<LoginResponse>()
    val loginResponse: LiveData<LoginResponse> get() = _loginResponse

    private val _errorMessage = MutableLiveData<String>()
    val errorMessage: LiveData<String> get() = _errorMessage

    fun login(email: String, password: String) {
        val request = LoginRequest(email, password)
        ApiClient.apiService.login(request).enqueue(object : Callback<LoginResponse> {
            override fun onResponse(call: Call<LoginResponse>, response: Response<LoginResponse>) {
                if (response.isSuccessful) {
                    _loginResponse.value = response.body()
                } else {
                    _errorMessage.value = "Error: ${response.code()}"
                }
            }

            override fun onFailure(call: Call<LoginResponse>, t: Throwable) {
                _errorMessage.value = t.message
            }
        })
    }
}