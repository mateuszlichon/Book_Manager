$(function () {
  // var span = $('span.date');
  // var spanTime = $('span.time');
  //
  // $.getJSON({
  //   url: 'http://date.jsontest.com'
  // }).done(function (data) {
  //   console.log(data);
  //   span.text(data.date);
  // }).fail(function (xhr, status, error) {
  //   console.log(xhr, status, error);
  //   span.text("Problem with request :(");
  // })
  //
  // setInterval(function () {
  //   $.getJSON({
  //     url: 'http://date.jsontest.com'
  //   }).done(function (data) {
  //     console.log(data);
  //     spanTime.text(data.time);
  //   }).fail(function (xhr, status, error) {
  //     console.log(xhr, status, error);
  //     spanTime.text("Problem with request :(");
  //   })
  // }, 1000);

  // $.getJSON({
  //   url: 'http://swapi.co/api/people/4/'
  // }).done(function (data) {
  //   console.log(data);
  // })

  var baseUrl = 'http://localhost:8080/Warsztaty_05/'
  var list = $('ul.books');
  var form = $('form.save');

  function renderList() {
    $.getJSON({
      url: baseUrl + 'books'
    }).done(function (data) {
     console.log(data);
      list.empty();
      data.forEach(function (book) {
        list.append($('<li>', {'data-id':book.id})
        .append('<span>' + book.title + '</span>')
        .append('<button class="delete">delete</button>')
        .append('<div>'));
      })
  });
  }

  list.on('click', 'button.delete', function (e) {

    $.ajax({
      url: baseUrl + 'books/remove/' + $(e.currentTarget).closest('li').data('id'),
      type: 'DELETE'
    }).done(function () {
      console.log("ok");
      renderList();
    });
    e.stopImmediatePropagation();
  });

  list.on('click', 'li', function (e) {
//    if(e.target.tagName !== 'BUTTON' && !e.target.classList.contains)
    $.getJSON({
      url: baseUrl+'books/'+$(e.currentTarget).data('id')
    }).done(function (book) {

      var html = $('<table>');

      for(var key in book) {
        html.append($('<tr>')
        .append($('<td>', {text:key}))
        .append($('<td>', {text:book[key]})))
      }

      $(e.currentTarget).find('div').html(html);
    })
  });



  form.on('submit', function (e) {

    //process form
    var data = {};
    $(this).find('input[type=text]').each(function (index, elem) {
      data[elem.name] = elem.value
    });

    console.log(data);

    $.post({
      headers: {
        'Content-Type': 'application/json'
      },
      url: baseUrl + 'books/add',
      data: JSON.stringify(data),
      dataType: 'json' //potencjalnie to mozna wyrzucic
    }).done(function (res) {
      console.log(res);
      renderList();
    }).fail(function (xhr, status, error) {
      console.log(xhr, status, error);
    })

    this.reset();
    e.preventDefault();
  });

  renderList();

});
