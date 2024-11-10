package com.zwd

import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.util.Log

import android.content.Intent
import android.net.Uri
import android.os.Build
import android.provider.DocumentsContract
import java.io.File
import androidx.core.content.FileProvider


class CalendarModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "CalendarModule"

    @ReactMethod
    fun createCalendarEvent(name: String, location: String) {
        Log.d("CalendarModule", "Create event called with name: $name and location: $location")
    }

     // 这个方法将用于打开指定路径的文件夹
    @ReactMethod
    fun openDirectory(path: String) {
        try {

            val intent = Intent(Intent.ACTION_VIEW)
            intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK

            // 检查Android版本，以确定使用哪种Uri
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                // 对于Android 8.0（API 26）及以上版本，需要使用文件的Content URI
                val contentUri = FileProvider.getUriForFile(
                    reactApplicationContext,
                    "com.zwd.fileprovider", // 替换为你的applicationId和authority
                    File(path)
                )
                // intent.setDataAndType(contentUri, "resource/folder")
                intent.setDataAndType(contentUri, "application/vnd.android.package-archive")
                intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
            } else {
                // 对于Android 8.0以下版本，可以直接使用文件路径
                // intent.setDataAndType(Uri.fromFile(File(path)), "resource/folder")
                intent.setDataAndType(Uri.fromFile(File(path)), "application/vnd.android.package-archive")
            }

            currentActivity?.startActivity(intent)
        } catch (e: Exception) {
            Log.e("OpenDirectoryModule", "Error opening directory: ${e.message}")
        }
    }
}
