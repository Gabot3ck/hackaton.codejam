package com.example.reservationpec.view.admin

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.reservationpec.databinding.ActivityAdminBinding

class AdminHomeActivity : AppCompatActivity() {

    //viewbindig
    private lateinit var binding: ActivityAdminBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityAdminBinding.inflate(layoutInflater)
        setContentView(binding.root)

    }
}