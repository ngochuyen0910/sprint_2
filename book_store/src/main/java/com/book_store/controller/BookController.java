package com.book_store.controller;

import com.book_store.model.Book;
import com.book_store.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/books")

public class BookController {
    @Autowired
    IBookService iBookService;

    @GetMapping
    public ResponseEntity<List<Book>> findAll() {
        return new ResponseEntity<>(iBookService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> findById(@PathVariable Integer id) {
        Optional<Book> book = iBookService.findById(id);
        if (!iBookService.findById(id).isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(book.get(), HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Book> showDetail(@PathVariable Integer id, BindingResult bindingResult) {
        Optional<Book> currentBook = iBookService.findById(id);

        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        }

        if (!currentBook.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

//        currentNotification.get().setId(notificationDto.getId());
//        currentNotification.get().setTitle(notificationDto.getTitle());
//        currentNotification.get().setContent(notificationDto.getContent());
//        currentNotification.get().setImage(notificationDto.getImage());

        iBookService.detail(currentBook.get());

        return new ResponseEntity<>(currentBook.get(), HttpStatus.OK);
    }
}
