package com.example.reservationpec.model

data class Reserva(
    val usuario: String,
    val horaReserva: String,
    val cantidadHoras: Int,
    val sector: String,
    val fecha: String,
    val estado: String
)