package pl.coderslab.modul5.bean;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class MemoryBookService {
	List<Book> list;
	Long bookId = 11l;

	public Long getBookId() {
		return bookId;
	}

	public void setBookId(Long bookId) {
		this.bookId = bookId;
	}

	public MemoryBookService() {
		list = new ArrayList<>();
		list.add(new Book(1L, "9788324631766", "Thiniking	in	Java", "Bruce	Eckel", "Helion", "programming"));
		list.add(new Book(2L, "9788324627738", "Rusz	glowa	Java.", "Sierra	Kathy,	Bates	Bert", "Helion",
				"programming"));
		list.add(new Book(3L, "9780130819338", "Java	2.	Podstawy", "Cay	Horstmann,	Gary	Cornell", "Helion",
				"programming"));
	}

	public List<Book> getList() {
		return list;
	}

	public void setList(List<Book> list) {
		this.list = list;
	}
	
	public Book serchById(long id) {
		List<Book> list = this.list;
		for(Book b : list) {
			if (b.getId()==id) {
				return b;
			}
		}
		return null;
	}
	
	public void addBook(long id, String isbn, String title, String author, String publisher, String type) {
		Book b = new Book(id, isbn, title, author, publisher, type);
		this.list.add(b);
	}

	public void addBook(Book b) {
		this.list.add(b);
	}
	
	public void delById(long id) {
		List<Book> list = this.list;
		for(Book b : list) {
			if (b.getId()==id) {
			list.remove(b);
			}
		}
	}
}
