<?php
if(isset($_GET['img'])){
    $img = $_GET['img'];

    // 获取数字部分作为随机种子
    $seed = preg_replace('/[^0-9]/', '', $img);

    // 输入验证
    $img = filter_var($img, FILTER_SANITIZE_STRING);

    $img_array = glob($img . "/*.{gif,jpg,png,webp,jpeg}", GLOB_BRACE);

    if(!empty($img_array)){
        // 使用数字部分作为随机种子选择图片路径
        srand($seed);
        $random_img_path = $img_array[array_rand($img_array)];

        // 重定向到随机选择的图片路径
        header("Location:" . $random_img_path);
        exit;
    } else {
        echo "No images found in the specified folder.";
    }
} else {
    echo "Please provide a folder parameter.";
}
?>