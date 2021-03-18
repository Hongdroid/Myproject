package com.example.navi_0301.ui.chat;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Bundle;

import androidx.annotation.Nullable;
import androidx.core.app.ActivityCompat;
import androidx.core.content.FileProvider;
import androidx.fragment.app.Fragment;

import android.os.Environment;
import android.provider.MediaStore;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;

import com.example.navi_0301.R;

import java.io.File;


public class CameraFragment extends Fragment {
    Button btn;
    ImageView imageView;
    File file;
    int CALL_CAMERA = 1;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_camera, container, false);

        btn = view.findViewById(R.id.btn_camera);
        imageView = view.findViewById(R.id.imageView);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getActivity(),"click",Toast.LENGTH_SHORT).show();

                // 1. takePicture 메소드생성!
                // 2. xml 폴더 만들어서 external.xml 파일 생성!
                // 3. Manifest.xml파일 열어서 권한부여!
                // 4. Manifest.xml 파일에ContentProvider 등록!
                // 5. 권한 요청 Dialog 띄우기!

                if (ActivityCompat.checkSelfPermission(getActivity(), Manifest.permission.WRITE_EXTERNAL_STORAGE)
                        != PackageManager.PERMISSION_GRANTED){// 저장소에 데이터를 쓰는 권한을 부여받지 않았다면~
                    ActivityCompat.requestPermissions(getActivity(),
                            new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE,Manifest.permission.READ_EXTERNAL_STORAGE},
                            0 );

                }

            }
        });

        return view;
    }
    public void takePicture(){// 사진 찍는 부분~
        // 저장할 파일 생성!
        if (file == null){
            // file 이름
            String fileName = "image.jpg";
            // 현재 기기의 외부 저장소 경로 지정
            File dir = Environment.getExternalStorageDirectory();
            // 해당 경로에 fileName으로 저장하겠다~
            file = new File(dir, fileName);
        }

        // 방금 지정한 dir에 바로 저장할 수 없음! => 보안상의 문제! Android에서 막아놈!
        // contentProvider라고 하는 Android 컴포넌트의 도움을 받아 저장소에 저장~
        Uri uri = FileProvider.getUriForFile(getActivity(), "org.techtown.capture.intent.fileprovider",file);

        //카메라 실행!
        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        intent.putExtra(MediaStore.EXTRA_OUTPUT, uri);
        if(intent.resolveActivity(getActivity().getPackageManager()) != null){
            startActivityForResult(intent,CALL_CAMERA);
        }
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == getActivity().RESULT_OK){
            if (requestCode == CALL_CAMERA){
                BitmapFactory.Options options = new BitmapFactory.Options();
                Bitmap bit = BitmapFactory.decodeFile(file.getAbsolutePath(),options);
                imageView.setImageBitmap(bit);
            }
        }
    }
}