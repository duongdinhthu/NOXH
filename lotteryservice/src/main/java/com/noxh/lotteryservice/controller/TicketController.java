package com.noxh.lotteryservice.controller;

import com.noxh.lotteryservice.dto.SubmitTicketRequest;
import com.noxh.lotteryservice.service.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ticket")
@RequiredArgsConstructor
public class TicketController {

    private final TicketService ticketService;

    @PostMapping("/submit")
    public ResponseEntity<?> submit(@RequestBody SubmitTicketRequest req) {
        return ResponseEntity.ok(ticketService.submit(req));
    }
}

