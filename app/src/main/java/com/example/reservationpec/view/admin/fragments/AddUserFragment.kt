package com.example.reservationpec.view.admin.fragments

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.example.reservationpec.databinding.FragmentAddUserBinding

class AddUserFragment : Fragment() {

    private var _binding: FragmentAddUserBinding? = null
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentAddUserBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.btnAddUser.setOnClickListener {
            val nombre = binding.editTextNombre.text.toString()
            val apellido = binding.editTextApellido.text.toString()
            val correo = binding.editTextCorreo.text.toString()
            val telefono = binding.editTextTelefono.text.toString()


            // Aquí agregarías la lógica para manejar el nuevo usuario

            // Vuelve a UserFragment después de agregar el usuario
            requireActivity().supportFragmentManager.popBackStack()
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}