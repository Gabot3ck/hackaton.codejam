package com.example.reservationpec.view.admin.fragments

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.reservationpec.R
import com.example.reservationpec.databinding.FragmentUserBinding
import com.example.reservationpec.model.User
import com.example.reservationpec.view.admin.adapters.UserAdapter

class UserFragment : Fragment() {

    private var _binding: FragmentUserBinding? = null
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentUserBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val users = listOf(
            User("John", "Doe", "john.doe@example.com", "123456789", "Activo"),
            User("Jane", "Smith", "jane.smith@example.com", "987654321", "De vacaciones"),
            User("Robert", "Brown", "robert.brown@example.com", "555555555", "Desvinculado")
        )

        val adapter = UserAdapter(users)
        binding.recyclerViewUsers.layoutManager = LinearLayoutManager(requireContext())
        binding.recyclerViewUsers.adapter = adapter

        binding.btnAddUser.setOnClickListener {
            requireActivity().supportFragmentManager.beginTransaction()
                .replace(R.id.fragment_container, AddUserFragment())
                .addToBackStack(null)
                .commit()
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}