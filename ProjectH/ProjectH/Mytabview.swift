//
//  Mytabview.swift
//  ProjectH
//
//  Created by 홍홍홍 on 2021/03/08.
//

import SwiftUI

struct MyTabview : View {
    var body: some View{
        TabView{
//            Text("1번")
//                .fontWeight(.black)
//                .font(.largeTitle)
            MyView(title:"1번",bgColor: Color.red)
                .tabItem{
                    Image(systemName: "airplane")
                    Text("1번")
                }
                .tag(0)
//            Text("2번")
//                .fontWeight(.black)
//                .font(.largeTitle)
            MyView(title:"1번",bgColor: Color.orange)
                .tabItem{
                    Image(systemName: "flame.fill")
                    Text("2번")
                }
                .tag(1)
//            Text("3번")
//                .fontWeight(.black)
//                .font(.largeTitle)
            MyView(title:"1번",bgColor: Color.blue)
                .tabItem{
                    Image(systemName: "doc.fill")
                    Text("3번")
                }
                .tag(2)
        }
        
    }
}

struct MyTabview_Previews: PreviewProvider {
    static var previews: some View {
        MyTabview()
    }
}
