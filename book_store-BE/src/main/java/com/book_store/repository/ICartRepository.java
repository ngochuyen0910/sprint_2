package com.book_store.repository;

import com.book_store.dto.BookCartDto;
import com.book_store.model.BookCart;
import com.book_store.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICartRepository extends JpaRepository<BookCart, Integer> {
//    @Query(value = "select bc.cart_id as id,bc.amount,b.image,b.name_book,b.price from cart left join book_cart bc on cart.id = bc.cart_id left join book b on bc.book_id = b.id where bc.cart_id =1;",nativeQuery = true)
//    List<BookCartDto> findAll();
    @Query(value = "select bc.cart_id as id,bc.amount,b.image,b.name_book as name,b.price from cart left join book_cart bc on cart.id = bc.cart_id left join book b on bc.book_id = b.id where bc.cart_id =1;",nativeQuery = true)
    List<BookCartDto> find();
}
