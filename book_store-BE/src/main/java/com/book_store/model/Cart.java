package com.book_store.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany(mappedBy = "cart")
    private Set<BookCart> bookCart;

    public Cart() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Set<BookCart> getBookCart() {
        return bookCart;
    }

    public void setBookCart(Set<BookCart> bookCart) {
        this.bookCart = bookCart;
    }
}
