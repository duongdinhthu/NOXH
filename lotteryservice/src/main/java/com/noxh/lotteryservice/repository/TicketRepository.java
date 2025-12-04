package com.noxh.lotteryservice.repository;

import com.noxh.lotteryservice.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
    Optional<Ticket> findByBatchIdAndUserId(Long batchId, Long userId);
    Optional<Ticket> findByTicketUuid(UUID uuid);
}
