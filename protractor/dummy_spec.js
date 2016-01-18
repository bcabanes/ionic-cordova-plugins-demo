describe('Test dummy describe', function() {
  it('should be able to view some html', function() {
    expect(element(by.css('html')).isPresent());
  });
});
