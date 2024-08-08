<?php  
// 读取设备的 User-Agent  
$userAgent = $_SERVER['HTTP_USER_AGENT'];  

// 判断是否为移动设备  
$isMobile = preg_match('/(mobile|android|iphone|ipad|ipod|blackberry|mini|windows\sce|palm)/i', $userAgent);  

// 根据设备选择文件夹名  
$folderName = $isMobile ? 'mobi' : 'pc';  

if (isset($_GET['img'])) {  
    $img = $_GET['img'];  

    // 输入验证  
    $img = filter_var($img, FILTER_SANITIZE_STRING);  
    
    // 创建文件路径  
    $txtFileName = $img . '.txt'; // 根据 img 参数动态设置文件名  
    $filePath = $folderName . '/' . $txtFileName;  

    if (file_exists($filePath)) {  
        // 读取图片地址文件  
        $img_array = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);  
        
        if (!empty($img_array)) {  
            // 随机选择一张图片  
            $random_img_path = trim($img_array[array_rand($img_array)]);  
            
            // 重定向到随机选择的图片路径  
            header("Location: " . $random_img_path);  
            exit;  
        } else {  
            echo "No images found in the specified file.";  
        }  
    } else {  
        echo "Image file does not exist.";  
    }  
} else {  
    echo "Please provide an img parameter.";  
}  
?>
