package com.example.reservationpec

import android.content.Intent
import android.os.Bundle
import android.widget.TextView
import android.widget.Toast
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

        binding.checkBoxDbPrueba.setOnCheckedChangeListener { _, isChecked ->
            if (isChecked) {
                binding.editTextEmail.setText("user@test.cl")
                binding.editTextPassword.setText("123456")
            } else {
                binding.editTextEmail.setText("")
                binding.editTextPassword.setText("")
            }
        }

        binding.btnLoginMain.setOnClickListener {
            if (binding.checkBoxDbPrueba.isChecked) {
                //solo para pruebas de desarrollo!
                val intent = Intent(this, SelectRolActivity::class.java)
                startActivity(intent)
            } else {
                val email = binding.editTextEmail.text.toString()
                val password = binding.editTextPassword.text.toString()
                loginViewModel.login(email, password)
            }
        }

        loginViewModel.loginResponse.observe(this, Observer { response ->
            if (response != null) {
                val intent = Intent(this, SelectRolActivity::class.java)
                startActivity(intent)
            }
        })

        loginViewModel.errorMessage.observe(this, Observer { errorMessage ->
            if (errorMessage != null) {
                binding.textViewError.text = errorMessage
                binding.textViewError.visibility = TextView.VISIBLE
                Toast.makeText(this, errorMessage, Toast.LENGTH_SHORT).show()
            }
        })
    }
}