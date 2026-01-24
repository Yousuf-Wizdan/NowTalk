import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Logo from "@/components/logo";
import { Link } from "react-router-dom";
import { AUTH_ROUTES } from "@/routes/routes";
import { MessageCircle, Zap, Shield, Users, ArrowRight, Check } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4">
          <Logo showText={true} />
          <div className="flex gap-3">
            <Link to={AUTH_ROUTES.SIGN_IN}>
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to={AUTH_ROUTES.SIGN_UP}>
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="inline-block">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Zap className="h-4 w-4" />
              Real-time messaging
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Connect, Chat, Collaborate
            <span className="block text-primary mt-2">In Real-Time</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience seamless communication with NowTalk. Chat instantly with friends, 
            colleagues, and teams with our modern, intuitive messaging platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={AUTH_ROUTES.SIGN_UP}>
              <Button size="lg" className="text-lg px-8">
                Start Chatting Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to={AUTH_ROUTES.SIGN_IN}>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Sign In
              </Button>
            </Link>
          </div>

          {/* Hero Image Placeholder */}
          <div className="mt-16 rounded-lg border bg-card overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <MessageCircle className="h-32 w-32 text-primary/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything you need to stay connected
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed for modern communication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Lightning Fast</h3>
                  <p className="text-muted-foreground">
                    Instant message delivery with Socket.IO. Your messages arrive in real-time, 
                    no delays, no waiting.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Secure & Private</h3>
                  <p className="text-muted-foreground">
                    Your conversations are protected with industry-standard encryption 
                    and secure authentication.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Group Chats</h3>
                  <p className="text-muted-foreground">
                    Create group conversations, collaborate with teams, and stay 
                    connected with multiple people at once.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Rich Messaging</h3>
                  <p className="text-muted-foreground">
                    Send text, images, and more. Express yourself with our feature-rich 
                    messaging experience.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Online Status</h3>
                  <p className="text-muted-foreground">
                    See who's online in real-time. Know when your contacts are available 
                    to chat instantly.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Modern UI</h3>
                  <p className="text-muted-foreground">
                    Beautiful, intuitive interface with dark mode support. Built with 
                    the latest web technologies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-20">
        <Card className="bg-primary text-primary-foreground border-0">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to start chatting?
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of users who trust NowTalk for their daily communication needs.
            </p>
            <Link to={AUTH_ROUTES.SIGN_UP}>
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Logo showText={true} />
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} NowTalk. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
