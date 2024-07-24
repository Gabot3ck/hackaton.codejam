package com.example.reservationpec.view.admin

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import com.example.reservationpec.R
import com.example.reservationpec.databinding.ActivityAdminBinding
import com.example.reservationpec.view.admin.fragments.HomeFragment
import com.example.reservationpec.view.admin.fragments.ProfileFragment
import com.example.reservationpec.view.admin.fragments.SpacesFragment
import com.example.reservationpec.view.admin.fragments.UserFragment
import com.google.android.material.bottomnavigation.BottomNavigationView

class AdminHomeActivity : AppCompatActivity() {

    private lateinit var binding: ActivityAdminBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityAdminBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.bottomNavigation.setOnNavigationItemSelectedListener(onNavigationItemSelectedListener)

        // Set the initial fragment
        loadFragment(HomeFragment())
    }

    private val onNavigationItemSelectedListener = BottomNavigationView.OnNavigationItemSelectedListener { item ->
        when (item.itemId) {
            R.id.navigation_home -> {
                loadFragment(HomeFragment())
                return@OnNavigationItemSelectedListener true
            }
            R.id.navigation_user -> {
                loadFragment(UserFragment())
                return@OnNavigationItemSelectedListener true
            }
            R.id.navigation_spaces -> {
                loadFragment(SpacesFragment())
                return@OnNavigationItemSelectedListener true
            }
            R.id.navigation_profile -> {
                loadFragment(ProfileFragment())
                return@OnNavigationItemSelectedListener true
            }
        }
        false
    }

    private fun loadFragment(fragment: Fragment) {
        supportFragmentManager
            .beginTransaction()
            .replace(R.id.fragment_container, fragment)
            .commit()
    }
}