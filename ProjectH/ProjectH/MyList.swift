//
//  MyList.swift
//  ProjectH
//
//  Created by 홍홍홍 on 2021/03/07.
//

import SwiftUI

struct MyList: View {
    
    @Binding var isNavigationBarHidden:Bool
    
    init(isNavigationBarHidden:Binding<Bool> = .constant(false)){
        if #available(iOS 14.0, *){
            
        }else{
            UITableView.appearance().tableFooterView = UIView()
        }
        UITableView.appearance().separatorStyle = .none
   _isNavigationBarHidden=isNavigationBarHidden
    
    }
    
    var body: some View{
        

        List{
            
            Section(header:
                        Text("프리미엄 채팅")
                        .font(.headline)
                        .foregroundColor(Color.black)
                    ,footer: Text("footer")
            ){
                ForEach(1...3,id: \.self){ itemIndex in
                    MeCard(icon: "flame.fill", title: "채팅 \(itemIndex)", start: "16명", end: "8명", bgColor: Color.pink)
            }
            }
            .listRowInsets(EdgeInsets.init(top:10,leading: 10,bottom: 10,trailing: 10))
            Section(header:Text("일반 채팅")
                        .font(.headline)
                        .foregroundColor(Color.black)
            
            ){
                ForEach(1...3,id: \.self){ itemIndex in
                    MeCard(icon: "flame.fill", title: "채팅 \(itemIndex)", start: "8명", end: "4명", bgColor: Color.red)
            }
            
            
            }
            .listRowInsets(EdgeInsets.init(top:10,leading: 10,bottom: 10,trailing: 10))
            .listRowBackground(Color.black)
        }
        .listStyle(GroupedListStyle())
        .navigationTitle("내 목록")
//        .navigationBarHidden(self.isNavigationBarHidden)
        .onAppear{
            self.isNavigationBarHidden=false
        }
    }
}

struct MyList_Previews: PreviewProvider {
    static var previews: some View {
        MyList()
    }
}
