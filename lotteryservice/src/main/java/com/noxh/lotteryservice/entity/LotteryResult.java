package com.noxh.lotteryservice.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "lottery_results")
@Data
public class LotteryResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "batch_id")
    private Long batchId;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "house_id")
    private Long houseId;

    @Column(name = "assigned_at")
    private LocalDateTime assignedAt = LocalDateTime.now();
}
