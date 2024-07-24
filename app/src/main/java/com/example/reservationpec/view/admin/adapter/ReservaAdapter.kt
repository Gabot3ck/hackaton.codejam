package com.example.reservationpec.view.admin.adapters

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.reservationpec.R
import com.example.reservationpec.model.Reserva

class ReservaAdapter(private val reservas: List<Reserva>) : RecyclerView.Adapter<ReservaAdapter.ReservaViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ReservaViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_reserva, parent, false)
        return ReservaViewHolder(view)
    }

    override fun onBindViewHolder(holder: ReservaViewHolder, position: Int) {
        val reserva = reservas[position]
        holder.usuarioTextView.text = reserva.usuario
        holder.horaReservaTextView.text = reserva.horaReserva
        holder.cantidadHorasTextView.text = "${reserva.cantidadHoras} horas"
        holder.sectorTextView.text = reserva.sector
        holder.fechaTextView.text = reserva.fecha
        holder.estadoTextView.text = reserva.estado
    }

    override fun getItemCount() = reservas.size

    class ReservaViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val usuarioTextView: TextView = itemView.findViewById(R.id.usuarioTextView)
        val horaReservaTextView: TextView = itemView.findViewById(R.id.horaReservaTextView)
        val cantidadHorasTextView: TextView = itemView.findViewById(R.id.cantidadHorasTextView)
        val sectorTextView: TextView = itemView.findViewById(R.id.sectorTextView)
        val fechaTextView: TextView = itemView.findViewById(R.id.fechaTextView)
        val estadoTextView: TextView = itemView.findViewById(R.id.estadoTextView)
    }
}