package com.noxh.lotteryservice.service;

import com.noxh.lotteryservice.dto.SubmitTicketRequest;
import com.noxh.lotteryservice.entity.Ticket;
import com.noxh.lotteryservice.repository.TicketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepository ticketRepository;

    public Ticket submit(SubmitTicketRequest req) {

        // 1 người chỉ có 1 phiếu
        ticketRepository.findByBatchIdAndUserId(req.getBatchId(), req.getUserId())
                .ifPresent(t -> {
                    throw new RuntimeException("User đã gửi phiếu trong batch này");
                });

        Ticket ticket = new Ticket();
        ticket.setBatchId(req.getBatchId());
        ticket.setUserId(req.getUserId());
        ticket.setTicketUuid(req.getTicketUuid());
        ticket.setStatus("PENDING");

        return ticketRepository.save(ticket);
    }
}

