$(function() {
  var content = $('.main-content');
  var styleguide = new Styleguide(content);
})

function Styleguide(content) {
  this.content = content;
  this.generateCodeSnippets();
}

Styleguide.prototype.generateCodeSnippets = function() {

  var self = this;

  this.parseCode = function(preview) {
    var sampleCode = $('<div>');
    $(sampleCode).html($(preview).html())
    $(sampleCode).find('.is-peripheral').remove();
    return sampleCode;
  }

  this.render = function(preview, sampleCode) {
    var sampleCodeBox = $('<div class="code-sample"><a class="button-toggle"></a><pre><code class="language-markup"></code></pre></div>');
    $(sampleCodeBox).find('code').text($(sampleCode).html());
    $(preview).after(sampleCodeBox);
  }

  $(this.content).find('.preview').each(function(index, preview) {
    var sampleCode = self.parseCode(preview);
    self.render(preview, sampleCode);
  });

  $('.button-toggle').click(function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('is-open');
  })
}
