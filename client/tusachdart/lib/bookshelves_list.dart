@HtmlImport('bookshelves_list.html')
library tusach.bookshelves_list;

import 'package:polymer/polymer.dart';
import 'package:tusachdart/elements.dart';
import 'package:tusachdart/abstract_page.dart';
import 'package:tusachdart/model.dart';

@CustomTag('bookshelves-list')
class BookshelvesList extends AbstractPage {
  @observable bool loading = false;
  @observable ObservableList books = new ObservableList();
  @observable var selection;
  @observable Element scrollTarget;

  BookshelvesList.created() : super.created() {
    print("BookshelvesList.created()...");
  }

  String getDownloadLink(Book book) {
    String url = AbstractPage.URL_PREFIX +
        "/api/downloadBook/" +
        book.title +
        ".epub?bookId=" +
        book.id.toString();
    if (isLoggedIn) {
      url += "&sessionId=" + loginManager.user.sessionId;
    }
    return url;
  }

  @override
  void domReady() {
    super.domReady();
    refreshPage();
  }

  @override
  void refreshPage() {
    super.refreshPage();

    if (loading) {
      return;
    }
    loading = true;
    print("BookshelvesPage.refresh...");
    String url = AbstractPage.URL_PREFIX + "/api/books/0";
    var httpRequest = new HttpRequest();
    httpRequest.open('GET', url);
    httpRequest.onLoadEnd.listen((e) => requestComplete(httpRequest));
    httpRequest.send('');
  }

  void requestComplete(HttpRequest httpRequest) {
    books.clear();

    int status = httpRequest.status;
    String json = httpRequest.responseText;
    print("status: $status, json response: $json");
    if (status == 200) {
      List<Book> list = Book.fromJson("{\"books\": " + json + "}");
      books.addAll(list);
      for (Book book in books) {
        print("Loaded book: $book");
      }
    } else {
/*
      // generate dummy data
      for (int i = 0; i < 200; i++) {
        Book b = new Book();
        b.id = 1000 + i;
        b.title = "su thuong de nhat hon loan toa " + i.toString();
        b.currentPageNo = 10;
        b.maxNumPages = 0;
        b.lastUpdatedTime = new DateTime.now();
        books.add(b);
      }
*/
    }
    loading = false;
  }
}
