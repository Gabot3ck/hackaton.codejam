package com.example.reservationpec.view

import android.content.Intent
import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.example.reservationpec.R
import com.example.reservationpec.databinding.ActivitySelectRolBinding
import com.example.reservationpec.view.admin.AdminHomeActivity

//Si el usuario tiene mas de un rol, se debe seleccionar uno, de lo contrario lleva a la pantalla principal

class SelectRolActivity : AppCompatActivity() {

    //viewbindig
    private lateinit var binding: ActivitySelectRolBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySelectRolBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.BtnAdminRol.setOnClickListener {
            val i = Intent(this, AdminHomeActivity::class.java)
            startActivity(i)
        }

        binding.btnUserRol.setOnClickListener {
            //accion boton para llevar a usuario a Activity User
        }

    }
}