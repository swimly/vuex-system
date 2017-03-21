<?
  header('Access-Control-Allow-Origin:*');
  $jsonp = $_GET['callback'];
  $base64_image_content=$_GET['img'];
  $base64_image_content=str_replace('data:image/png;base64,', '', $base64_image_content);
  $path='upload/';
  $output_file =time().rand(100,999).'.jpg';
  $path = $path.$output_file;
  $ifp = fopen( $path, "wb" );
  fwrite( $ifp, base64_decode( $base64_image_content) );
  fclose( $ifp );
  $result = array(
    'path'=> $path
  );
  echo $jsonp.'('.json_encode($result).')';
?>