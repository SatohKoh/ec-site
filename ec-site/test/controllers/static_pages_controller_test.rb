require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get static_pages_home_url
    assert_response :success
  end

  test "should get old" do
    get static_pages_old_url
    assert_response :success
  end

  test "should get new" do
    get static_pages_new_url
    assert_response :success
  end

  test "should get hokkaido" do
    get static_pages_hokkaido_url
    assert_response :success
  end
end
