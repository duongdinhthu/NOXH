package com.noxh.lotteryservice.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "houses")
@Data
public class House {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "batch_id")
    private Long batchId;

    private String code;
    private Double areaM2;
    private String block;
    private String floor;

    private String status;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
}
