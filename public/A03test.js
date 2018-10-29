QUnit.test('Testing the new show function with a  positive inputs', function (assert) {
    assert.equal(show(2), 2, "checking with a positive integer");
    assert.equal(show(4), 24, "checking with a positive integer");
    assert.equal(show(3), 6, "checking with a positive integer");
    assert.equal(show(5), 120, "checking with a positive integer");
});
QUnit.test('Testing the show function with a  nregative inputs', function (assert) {
    assert.throws(function () { show(-1); }, new Error('The given argument is a negative number'), "correctly raises an error if one tries to give a negative number");
   
});
QUnit.test('Testing the show function with a  zero input', function (assert) {
    assert.equal(show(0), 1, "checking with a zero integer");
   
});