require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get root_path
    assert_response :success
  end

  test "should get brand" do
    get brand_path
    assert_response :success
  end

  test "should get about" do
    get about_path
    assert_response :success
  end

  test "should get contact" do
    get contact_path
    assert_response :success
  end

  test "should get old" do
    get old_path
    assert_response :success
  end

  test "should get new" do
    get new_path
    assert_response :success
  end

  test "should get genmaiYukihotaka" do
    get genmaiYukihotaka_path
    assert_response :success
  end

  test "should get hakumaiYukihotaka" do
    get hakumaiYukihotaka_path
    assert_response :success
  end

  test "should get hakumaiKinki" do
    get hakumaiKinki_path
    assert_response :success
  end

  test "should get hakumaiChugoku" do
    get hakumaiChugoku_path
    assert_response :success
  end

  test "should get hakumaiShimaneNita" do
    get hakumaiShimaneNita_path
    assert_response :success
  end

  test "should get hakumaiShimaneHonki" do
    get hakumaiShimaneHonki_path
    assert_response :success
  end

  test "should get hakumaiTottoriKohu" do
    get hakumaiTottoriKohu_path
    assert_response :success
  end

  test "should get privacy" do
    get privacy_path
    assert_response :success
  end
end
