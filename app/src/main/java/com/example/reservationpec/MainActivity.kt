package com.example.reservationpec

import android.content.Intent
import android.os.Bundle
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.Observer
import com.example.reservationpec.databinding.ActivityMainBinding
import com.example.reservationpec.view.SelectRolActivity
import com.example.reservationpec.viewmodel.LoginViewModel

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private val loginViewModel: LoginViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.btnLoginMain.setOnClickListener {
            val email = binding.textInputLayout.editText?.text.toString()
            val password = binding.textInputLayout2.editText?.text.toString()
            loginViewModel.login(email, password)
        }

        loginViewModel.loginResponse.observe(this, Observer { response ->
            if (response != null) {
                // Guarda el token de acceso y navega a la siguiente actividad
                val intent = Intent(this, SelectRolActivity::class.java)
                startActivity(intent)
            }
        })

        loginViewModel.errorMessage.observe(this, Observer { errorMessage ->
            if (errorMessage != null) {
                // Mostrar mensaje de error
                binding.textViewError.text = errorMessage
            }
        })
    }
}