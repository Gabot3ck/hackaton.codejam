package com.example.reservationpec.view.admin.fragments

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.reservationpec.databinding.FragmentHomeBinding
import com.example.reservationpec.model.Reserva
import com.example.reservationpec.view.admin.adapters.ReservaAdapter

class HomeFragment : Fragment() {

    private var _binding: FragmentHomeBinding? = null
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentHomeBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val reservas = listOf(
            Reserva("Usuario 1", "10:00 AM", 2, "Sector A", "2023-07-24", "Confirmada"),
            Reserva("Usuario 2", "11:00 AM", 1, "Sector B", "2023-07-24", "Pendiente"),
            Reserva("Usuario 3", "12:00 PM", 3, "Sector C", "2023-07-24", "Cancelada"),
        )

        val adapter = ReservaAdapter(reservas)
        binding.ListReservHome.layoutManager = LinearLayoutManager(requireContext())
        binding.ListReservHome.adapter = adapter
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}