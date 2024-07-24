package com.example.reservationpec.view.admin.adapters

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.reservationpec.R
import com.example.reservationpec.model.User

class UserAdapter(private val users: List<User>) : RecyclerView.Adapter<UserAdapter.UserViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): UserViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_user, parent, false)
        return UserViewHolder(view)
    }

    override fun onBindViewHolder(holder: UserViewHolder, position: Int) {
        val user = users[position]
        holder.nombreTextView.text = user.nombre
        holder.apellidoTextView.text = user.apellido
        holder.correoTextView.text = user.correo
        holder.telefonoTextView.text = user.telefono
        holder.estadoTextView.text = user.estado

        holder.iconEdit.setOnClickListener {
            // Lógica para editar el usuario
        }

        holder.iconCancel.setOnClickListener {
            // Lógica para cancelar el usuario
        }
    }

    override fun getItemCount() = users.size

    class UserViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val nombreTextView: TextView = itemView.findViewById(R.id.nombreTextView)
        val apellidoTextView: TextView = itemView.findViewById(R.id.apellidoTextView)
        val correoTextView: TextView = itemView.findViewById(R.id.correoTextView)
        val telefonoTextView: TextView = itemView.findViewById(R.id.telefonoTextView)
        val estadoTextView: TextView = itemView.findViewById(R.id.estadoTextView)
        val iconEdit: ImageView = itemView.findViewById(R.id.iconEdit)
        val iconCancel: ImageView = itemView.findViewById(R.id.iconCancel)
    }
}