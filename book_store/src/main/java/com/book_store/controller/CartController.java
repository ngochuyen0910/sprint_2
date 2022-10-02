package com.book_store.controller;

import com.book_store.dto.BookCartDto;
import com.book_store.model.Book;
import com.book_store.model.Cart;
import com.book_store.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/cart")
public class CartController {
    @Autowired
    ICartService iCartService;

    @GetMapping
    public ResponseEntity<List<BookCartDto>> findAll() {
        return new ResponseEntity<>(iCartService.findAll(), HttpStatus.OK);
    }
}
