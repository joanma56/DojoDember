import { test } from 'qunit';
import moduleForAcceptance from 'proof/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | accessing test');

test('should redirect to about', function(assert) {
  visit('/');
  //click("a:about")
  andThen(function() {
    assert.equal(currentURL(), '/about',"succesful redirect to about page");
  });
});

test('should redirect to about', function(assert) {
  visit('/');
  //click("a:about")
  andThen(function() {
    assert.equal(currentURL(), '/contactUs',"succesful redirect to contactUs page");
  });
});
