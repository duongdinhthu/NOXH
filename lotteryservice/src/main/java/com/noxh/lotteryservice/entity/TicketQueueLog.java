package com.noxh.lotteryservice.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "ticket_queue_log")
@Data
public class TicketQueueLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private UUID ticketUuid;
    private Long userId;
    private Long batchId;

    private String event;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
}
