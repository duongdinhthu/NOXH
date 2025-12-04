package com.noxh.lotteryservice.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class SubmitTicketRequest {
    private Long batchId;
    private Long userId;
    private UUID ticketUuid;
}
